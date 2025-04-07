window.onload = function () {
    const sessionKey = "lugares";
  
    // Solo guarda los datos si aún no están en sessionStorage
    if (!sessionStorage.getItem(sessionKey)) {
      fetch("dynamic.json")
        .then(response => {
          if (!response.ok) throw new Error("No se pudo cargar dynamic.json");
          return response.json();
        })
        .then(data => {
          sessionStorage.setItem(sessionKey, JSON.stringify(data));
          console.log("✅ Datos guardados en sessionStorage:", data);
        })
        .catch(error => {
          console.error("❌ Error al cargar dynamic.json:", error);
        });
    } else {
      console.log("📦 sessionStorage ya contiene datos. No se sobrescriben.");
    }
  };
  