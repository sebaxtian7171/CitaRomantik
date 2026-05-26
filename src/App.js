import { useState } from "react";

const DISCORD_WEBHOOK =
  "https://discord.com/api/webhooks/1508953601689649285/9e2JSQtioIx2f0dP3doW3ub04t3Z4_65x4RUtnGjiIfQi0D7cf_UyDHCqMlbtDZshPx8";

export default function App() {
  const [pantalla, setPantalla] = useState("inicio");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [flores, setFlores] = useState("Sí 💖");
  const [chocolates, setChocolates] = useState("");

  const aceptar = () => {
    setPantalla("disponibilidad");
  };

  const moverBoton = (e) => {
    const boton = e.target;
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 120 - 60;
    boton.style.transform = `translate(${x}px, ${y}px)`;
  };

  const enviarRespuestas = async () => {
    const mensaje = {
      content: `💖 NUEVA RESPUESTA 💖

📅 Día: ${fecha}
⏰ Hora: ${hora}
🌹 Flores: ${flores}
🍫 Chocolates: ${chocolates}`,
    };

    try {
      await fetch(DISCORD_WEBHOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mensaje),
      });

      alert("✨ Perfecto, oficialmente tenemos una cita 💕");
    } catch (error) {
      alert("Ocurrió un error enviando las respuestas 😢");
    }
  };

  if (pantalla === "disponibilidad") {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #ffe0ec, #ead7ff)",
          fontFamily: "Arial, sans-serif",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "40px",
            borderRadius: "30px",
            maxWidth: "600px",
            width: "100%",
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              color: "#ff4f8b",
              marginBottom: "20px",
            }}
          >
            Yaaay 💖
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#555",
              marginBottom: "35px",
              lineHeight: "1.6",
            }}
          >
            Ahora necesito información muy importante 😌
          </p>

          <div style={{ marginBottom: "25px", textAlign: "left" }}>
            <label
              style={{
                display: "block",
                marginBottom: "10px",
                fontSize: "18px",
                color: "#444",
                fontWeight: "bold",
              }}
            >
              ¿Qué día estás disponible? 📅
            </label>

            <input
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              type="date"
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "15px",
                border: "2px solid #ffd1e3",
                fontSize: "16px",
              }}
            />
          </div>

          <div style={{ marginBottom: "35px", textAlign: "left" }}>
            <label
              style={{
                display: "block",
                marginBottom: "10px",
                fontSize: "18px",
                color: "#444",
                fontWeight: "bold",
              }}
            >
              ¿Y a qué hora? ⏰
            </label>

            <input
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              type="time"
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "15px",
                border: "2px solid #ffd1e3",
                fontSize: "16px",
              }}
            />
          </div>

          <div style={{ marginBottom: "35px", textAlign: "left" }}>
            <label
              style={{
                display: "block",
                marginBottom: "12px",
                fontSize: "18px",
                color: "#444",
                fontWeight: "bold",
              }}
            >
              ¿Te puedo llevar flores? 🌹
            </label>

            <select
              value={flores}
              onChange={(e) => setFlores(e.target.value)}
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "15px",
                border: "2px solid #ffd1e3",
                fontSize: "16px",
                background: "white",
              }}
            >
              <option>Sí 💖</option>
              <option>No 😌</option>
              <option>Que sea sorpresa ✨</option>
            </select>
          </div>

          <div style={{ marginBottom: "35px", textAlign: "left" }}>
            <label
              style={{
                display: "block",
                marginBottom: "12px",
                fontSize: "18px",
                color: "#444",
                fontWeight: "bold",
              }}
            >
              ¿De cuáles chocolates te gustan? 🍫
            </label>

            <textarea
              value={chocolates}
              onChange={(e) => setChocolates(e.target.value)}
              placeholder="Escribe aquí tus favoritos 😌"
              style={{
                width: "100%",
                minHeight: "110px",
                padding: "15px",
                borderRadius: "15px",
                border: "2px solid #ffd1e3",
                fontSize: "16px",
                resize: "none",
                fontFamily: "Arial, sans-serif",
              }}
            />
          </div>

          <button
            onClick={enviarRespuestas}
            style={{
              background: "#ff4f8b",
              color: "white",
              border: "none",
              padding: "18px 40px",
              borderRadius: "18px",
              fontSize: "22px",
              cursor: "pointer",
              boxShadow: "0 5px 15px rgba(255,79,139,0.4)",
            }}
          >
            Confirmar 💕
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #ffd6e7, #f3d1ff)",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "30px",
          maxWidth: "600px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            color: "#ff4f8b",
            marginBottom: "20px",
          }}
        >
          Tengo una pregunta para ti... 💖
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#555",
            lineHeight: "1.6",
            marginBottom: "30px",
          }}
        >
          Quería invitarte a salir de una forma diferente ✨
          <br />
          Porque una persona especial merece algo especial.
        </p>

        <div
          style={{
            background: "#fff0f5",
            padding: "30px",
            borderRadius: "25px",
            marginBottom: "40px",
          }}
        >
          <h2
            style={{
              color: "#ff4f8b",
              fontSize: "36px",
              marginBottom: "15px",
            }}
          >
            ¿Quieres salir conmigo? 💕
          </h2>

          <p style={{ color: "#666", fontSize: "18px" }}>
            Prometo buena compañía, risas y comida rica 😌
          </p>
        </div>

        <div
          style={{
            position: "relative",
            height: "120px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <button
            onClick={aceptar}
            style={{
              background: "#ff4f8b",
              color: "white",
              border: "none",
              padding: "18px 40px",
              borderRadius: "18px",
              fontSize: "24px",
              cursor: "pointer",
              boxShadow: "0 5px 15px rgba(255,79,139,0.4)",
            }}
          >
            Sí 💖
          </button>

          <button
            onMouseEnter={moverBoton}
            style={{
              background: "#eee",
              color: "#555",
              border: "none",
              padding: "16px 35px",
              borderRadius: "18px",
              fontSize: "22px",
              cursor: "pointer",
              position: "absolute",
              right: "40px",
              transition: "0.2s",
            }}
          >
            No 😶
          </button>
        </div>

        <p
          style={{
            marginTop: "30px",
            color: "#999",
            fontStyle: "italic",
          }}
        >
          Hecho especialmente para ti ✨
        </p>
      </div>
    </div>
  );
}
