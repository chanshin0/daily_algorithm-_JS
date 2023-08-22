function solution(m, musicinfos) {
    function count(char) {
        return (char.match(/#/g) || []).length;
    }

    function convertMelody(melody) {
        let converted = [];
        let i = 0;
        while (i < melody.length) {
            if (i < melody.length - 1 && melody[i + 1] === '#') {
                converted.push(String.fromCharCode(melody.charCodeAt(i) + 7));
                i += 2;
            } else {
                converted.push(melody[i]);
                i += 1;
            }
        }
        return converted.join('');
    }

    let answer = [];

    m = convertMelody(m);
    let musics = [];
    for (let i = 0; i < musicinfos.length; i++) {
        let [s, e, name, melody] = musicinfos[i].split(',');
        s = s.split(':').map(Number);
        e = e.split(':').map(Number);
        let pt = (e[0] * 60 + e[1]) - (s[0] * 60 + s[1]);

        melody = convertMelody(melody);
        let l = melody.length - count(melody);
        let quot = Math.floor(pt / l);
        let rest = pt % l;

        let temp = melody.repeat(quot) + melody.substring(0, rest + count(melody.substring(0, rest)));

        musics.push([i, pt, name, temp]);
    }

    for (let v of musics) {
        if (answer.length && v[1] <= answer[answer.length - 1][0]) {
            continue;
        }

        let melody = v[3];
        if (melody.includes(m)) {
            answer.push([v[1], v[2]]);
        }
    }

    return answer.length ? answer[answer.length - 1][1] : "(None)";
}
