let data_fish = [];

fetch('data_fish.json')
    .then((r) => r.json())
    .then((json) => {
        data_fish = json;

        let daftar_fish = [];

        data_fish.forEach((d) => {
            daftar_fish.push(d.a);
            daftar_fish.push(d.b);
        });

        daftar_fish = [...new Set(daftar_fish)].sort();

        const s11 = document.getElementById('input11');
        const s21 = document.getElementById('input21');
        const sfish = document.getElementById('inputfish');

        daftar_fish.forEach((nama) => {
            let o11 = document.createElement('option');
            o11.value = nama;
            o11.textContent = nama;
            s11.appendChild(o11);

            let o21 = document.createElement('option');
            o21.value = nama;
            o21.textContent = nama;
            s21.appendChild(o21);

            let ofish = document.createElement('option');
            ofish.value = nama;
            ofish.textContent = nama;
            sfish.appendChild(ofish);
        });
    });

function cari_fish() {
    let a1 = input11.value;
    let b1 = input21.value;

    let hasil1 = 'Tidak ditemukan';

    for (let d of data_fish) {
        if ((d.a === a1 && d.b === b1) || (d.a === b1 && d.b === a1)) {
            hasil1 = d.hasil;
            break;
        }
    }

    document.getElementById('hasil1').innerHTML = hasil1;
}

function cari_kombinasi_fish() {
    let fish1 = inputfish.value;
    let i = 0;

    let hasilfish = '<table border="1" style="width: 100%;border-collapse: collapse">';

    for (let d of data_fish) {
        if (d.hasil === fish1) {
            if (i % 2 == 0) {
                hasilfish +=
                    '<tr style="background: #ccc !important"><td>' +
                    d.a +
                    '</td><td> & </td><td>' +
                    d.b +
                    '</td></tr>';
            } else {
                hasilfish += '<tr><td>' + d.a + '</td><td> & </td><td>' + d.b + '</td></tr>';
            }
            i++;
        }
    }

    hasilfish += '</table>';

    document.getElementById('hasilfish').innerHTML = hasilfish;
}
