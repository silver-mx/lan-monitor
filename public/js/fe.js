function sendWakeOnLan() {
  $.post('/api/v1/net/wol', { macAddress: 'AC:22:0B:50:31:3A' });
}
