// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

function bump(x) {
    let total = x.split("").reduce((acc, c) => {
        if (c.includes("n")) {
            return acc + 1
        }
        return acc
    }, 0)
    return total > 15 ? "Car Dead" : "Woohoo!"
}

const bump = x => (x.split("n").length > 16 ? "Car Dead" : "Woohoo!")
