module.exports = {
  apps: [{
    name: 'wizard-portfolio',
    script: './server/dist/server/src/index.js',
    interpreter: '/opt/node-24.22.2/bin/node',
    cwd: '/root/projects/wizard-portfolio',
    exec_mode: 'fork',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
    },
  }],
};
