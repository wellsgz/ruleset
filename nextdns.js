//Script event auto linked ipv4 nextdns: network-change

async function launch() {
    await linkedip();
    $done();
}
launch()
function linkedip(){ 
$httpClient.post('https://link-ip.nextdns.io/fe2226/cf9ef083c5ff7695', function(error, response, data){
  if (error) {
console.log('❌');
  } else {
console.log('🔔'+ data);
  }
});
}
