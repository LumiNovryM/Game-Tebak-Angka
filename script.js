let ulangi = true;
while (ulangi) {
	alert('Tebak angka dari 1 - 10!\nKamu punya 3 kesempatan.');
	let comp = Math.round (Math.random() * 10);
	let hasil = '';
	for (let i = 3; i > 0; i--) {
		let user = prompt('Masukkan Angka tebakan!');
		kesempatan = i - 1;
		if (user == '') {
			alert('Yang anda masukkan bukan angka');
			i = 0;
		} else if (user == null) {
			i = 0;	
		} else {
			if (user == comp) {
				alert('Anda BENAR!\nAngka yang dicari adalah ' + comp);
				i = 0;
			} else if (user < comp) {
				if (kesempatan == 0) {
					alert('Anda GAGAL!\nAngka yang dicari adalah ' + comp);
				} else {
					alert('Terlalu RENDAH!\nAyo masih ada ' + kesempatan + ' kesempatan');
				}
			} else if (user > comp) {
				if (kesempatan == 0) {
					alert('Anda GAGAL!\nAngka yang dicari adalah ' + comp);
				} else {
					alert('Terlalu TINGGI!\nAyo masih ada ' + kesempatan + ' kesempatan');
				}
			} else {
				alert('Yang anda masukkan bukan angka');
				i = 0;
			}
		}
	}
    ulangi = confirm('Main lagi?');
}
alert('Terima kasih.');