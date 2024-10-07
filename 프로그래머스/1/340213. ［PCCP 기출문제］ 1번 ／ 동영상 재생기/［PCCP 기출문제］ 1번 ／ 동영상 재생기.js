function solution(video_len, pos, op_start, op_end, commands) {
    let [min, sec] = timeToDigit(pos)
    const [eMin, eSec] = timeToDigit(video_len)
    const [op_sMin, op_sSec, op_eMin, op_eSec] = [...timeToDigit(op_start), ...timeToDigit(op_end)]
    
    commands.forEach((com)=>{
        ({min, sec} = jumpOpening(min, sec, op_sMin, op_sSec, op_eMin, op_eSec))
        
        if (com === "prev") {
            ({min, sec} = prev(min, sec))
            
        } else {
            ({min, sec} = next(min, sec, eMin, eSec))
        }
        
        ({min, sec} = jumpOpening(min, sec, op_sMin, op_sSec, op_eMin, op_eSec))
    })
    
    return formatTime(min, sec)
}

function formatTime(min, sec) {
    return [min,sec].map(v=>v.toString().padStart(2, "0")).join(":")
}

function timeToDigit(time) {
    return time.split(":").map(Number)
}

function jumpOpening(min, sec, sMin, sSec, eMin, eSec) {
    const result = {min, sec}
    if (min < sMin || min > eMin) return result
    if ((min === sMin && sec < sSec) || (min === eMin && sec > eSec)) return result
    return {min:eMin, sec:eSec}
}

function prev(min, sec) {
    if (sec < 10) {
        return min === 0
            ? { min: 0, sec: 0 }
            : { min: min - 1, sec: 60 - (10 - sec) };
    }
    return { min, sec: sec - 10 };
}

function next(min, sec, endMin, endSec) {
    let newMin = min;
    let newSec = sec + 10;

    if (newSec >= 60) {
        newMin += 1;
        newSec -= 60;
    }

    if (newMin === endMin && newSec > endSec) {
        newSec = endSec;
    }

    return { min: newMin, sec: newSec };
}