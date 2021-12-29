function load() {
    try {
        window.onload = () => {
            alert("Страница загружена")
        }
    }
    catch {
        alert("ОЙ...")
    }
}
load();