let data = [];

fetch('data_fin.json')
    .then((r) => r.json())
    .then((json) => {
        data = json;

        let daftar = [];

        data.forEach((d) => {
            daftar.push(d.a);
            daftar.push(d.b);
        });

        daftar = [...new Set(daftar)].sort();

        const s1 = document.getElementById('input1');
        const s2 = document.getElementById('input2');
        const sfin = document.getElementById('inputfin');

        daftar.forEach((nama) => {
            let o1 = document.createElement('option');
            o1.value = nama;
            o1.textContent = nama;
            s1.appendChild(o1);

            let o2 = document.createElement('option');
            o2.value = nama;
            o2.textContent = nama;
            s2.appendChild(o2);

            let ofin = document.createElement('option');
            ofin.value = nama;
            ofin.textContent = nama;
            sfin.appendChild(ofin);
        });
    });

function cari() {
    let a = input1.value;
    let b = input2.value;

    let hasil = 'Tidak ditemukan';

    for (let d of data) {
        if ((d.a === a && d.b === b) || (d.a === b && d.b === a)) {
            hasil = d.hasil;
            break;
        }
    }

    document.getElementById('hasil').innerHTML = hasil;
}

function cari_kombinasi_fin() {
    let fin = inputfin.value;
    let i = 0;

    let hasilfin = '<table border="1" style="width: 100%;border-collapse: collapse">';

    for (let d of data) {
        if (d.hasil === fin) {
            if (i % 2 == 0) {
                hasilfin +=
                    '<tr style="background: #ccc !important"><td>' +
                    d.a +
                    '</td><td> & </td><td>' +
                    d.b +
                    '</td></tr>';
            } else {
                hasilfin += '<tr><td>' + d.a + '</td><td> & </td><td>' + d.b + '</td></tr>';
            }
            i++;
        }
    }

    hasilfin += '</table>';

    document.getElementById('hasilfin').innerHTML = hasilfin;
}
