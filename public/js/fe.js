function sendWakeOnLan() {
  $.post('/api/v1/actions/wol', { host: 'server' });
}
