function load() {
    try {
        window.onload = () => {
            alert("Страница загружена")
        }
    }
    catch (err) {
        alert("ОЙ...")
    }
}
load();