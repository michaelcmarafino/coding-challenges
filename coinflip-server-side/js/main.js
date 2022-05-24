document.querySelector("#btn").addEventListener("click", makeReq)

async function makeReq() {
    const res = await fetch("/api")
    const data = await res.json()
    document.querySelector("#result").textContent = data.answer
}
