import { fetchServiceUpdates } from "@/services/api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ServiceUpdatesToast() {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    fetchServiceUpdates().then((res) => {
      setUpdates(res.data);
    });
  }, []);

  useEffect(() => {
    if (updates.length === 0) return;

    let index = 0;

    const interval = setInterval(() => {
      toastMessage(updates[index]);
      index++;

      if (index >= updates.length) {
        clearInterval(interval);
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [updates]);

  const toastMessage = (item) => {
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-sm w-full bg-black/80 text-white shadow-lg rounded-xl pointer-events-auto p-4 border border-white/10`}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary text-white">
              {item.type}
            </span>

            <button
              onClick={() => toast.dismiss(t.id)}
              className="text-xs text-white/70 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Message */}
          <p className="text-sm text-white/90">{item.message}</p>

          {/* Footer */}
          <p className="text-[10px] text-white/40 mt-2">Live system update</p>
        </div>
      ),
      {
        duration: 2000, // ✅ auto close after 2 seconds
      },
    );
  };

  return null;
}
