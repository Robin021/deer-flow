# Backend Development Dockerfile

# UV source image (override for restricted networks that cannot reach ghcr.io)
ARG UV_IMAGE=ghcr.io/astral-sh/uv:0.7.20
FROM ${UV_IMAGE} AS uv-source

FROM python:3.12-slim-bookworm

ARG NODE_MAJOR=22
ARG APT_MIRROR
ARG APT_FALLBACK_MIRROR=mirrors.aliyun.com
ARG UV_INDEX_URL
ARG UV_HTTP_TIMEOUT=120

# Install system dependencies + Node.js (provides npx for MCP servers)
RUN set -eux; \
    use_distro_nodejs=0; \
    apply_debian_mirror() { \
      mirror="$1"; \
      sed -i "s|http://deb.debian.org/debian|http://${mirror}/debian|g; s|http://deb.debian.org/debian-security|http://${mirror}/debian-security|g; s|https://deb.debian.org/debian|https://${mirror}/debian|g; s|https://deb.debian.org/debian-security|https://${mirror}/debian-security|g" /etc/apt/sources.list.d/debian.sources 2>/dev/null || true; \
      sed -i "s|http://deb.debian.org/debian|http://${mirror}/debian|g; s|http://deb.debian.org/debian-security|http://${mirror}/debian-security|g; s|https://deb.debian.org/debian|https://${mirror}/debian|g; s|https://deb.debian.org/debian-security|https://${mirror}/debian-security|g" /etc/apt/sources.list 2>/dev/null || true; \
    }; \
    apt_update() { \
      apt-get \
        -o Acquire::Retries=1 \
        -o Acquire::http::Timeout=20 \
        -o Acquire::https::Timeout=20 \
        update; \
    }; \
    if [ -n "${APT_MIRROR}" ]; then \
      use_distro_nodejs=1; \
      apply_debian_mirror "${APT_MIRROR}"; \
    fi; \
    if ! apt_update; then \
      if [ -n "${APT_MIRROR}" ]; then \
        echo "APT update failed with configured APT_MIRROR=${APT_MIRROR}" >&2; \
        exit 1; \
      fi; \
      echo "APT update failed against deb.debian.org, retrying with ${APT_FALLBACK_MIRROR}" >&2; \
      use_distro_nodejs=1; \
      apply_debian_mirror "${APT_FALLBACK_MIRROR}"; \
      apt_update; \
    fi; \
    apt-get install -y \
      curl \
      build-essential \
      gnupg \
      ca-certificates; \
    if [ "${use_distro_nodejs}" = "1" ]; then \
      echo "Using Debian nodejs/npm packages for restricted-network build" >&2; \
      apt-get install -y nodejs npm; \
    else \
      mkdir -p /etc/apt/keyrings; \
      if curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg; then \
        echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_${NODE_MAJOR}.x nodistro main" > /etc/apt/sources.list.d/nodesource.list; \
        apt_update || echo "NodeSource index unavailable, falling back to Debian nodejs/npm" >&2; \
      else \
        echo "NodeSource key download failed, falling back to Debian nodejs/npm" >&2; \
      fi; \
      if ! apt-get install -y nodejs; then \
        rm -f /etc/apt/sources.list.d/nodesource.list; \
        apt_update; \
        apt-get install -y nodejs npm; \
      fi; \
    fi; \
    if ! command -v npx >/dev/null 2>&1; then \
      apt-get install -y npm; \
    fi; \
    rm -rf /var/lib/apt/lists/*

# Install Docker CLI (for DooD: allows starting sandbox containers via host Docker socket)
COPY --from=docker:cli /usr/local/bin/docker /usr/local/bin/docker

# Install uv (source image overridable via UV_IMAGE build arg)
COPY --from=uv-source /uv /uvx /usr/local/bin/

# Set working directory
WORKDIR /app

# Copy frontend source code
COPY backend ./backend

# Install dependencies with cache mount
RUN --mount=type=cache,target=/root/.cache/uv \
    sh -c "cd backend && UV_INDEX_URL=${UV_INDEX_URL:-https://pypi.org/simple} UV_HTTP_TIMEOUT=${UV_HTTP_TIMEOUT:-120} uv sync"

# Expose ports (gateway: 8001, langgraph: 2024)
EXPOSE 8001 2024

# Default command (can be overridden in docker-compose)
CMD ["sh", "-c", "cd backend && PYTHONPATH=. uv run uvicorn app.gateway.app:app --host 0.0.0.0 --port 8001"]
