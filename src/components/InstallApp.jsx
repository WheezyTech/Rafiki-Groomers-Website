import { useEffect, useState } from "react";

function InstallApp() {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(
    () =>
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true
  );
  const [showInstructions, setShowInstructions] = useState(false);
  const isIOS =
    /iPad|iPhone|iPod/.test(window.navigator.userAgent) ||
    (window.navigator.platform === "MacIntel" &&
      window.navigator.maxTouchPoints > 1);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };
    const handleInstalled = () => {
      setIsInstalled(true);
      setInstallPrompt(null);
      setShowInstructions(false);
    };
    const displayMode = window.matchMedia("(display-mode: standalone)");
    const syncInstalledState = () => {
      setIsInstalled(
        displayMode.matches || window.navigator.standalone === true
      );
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleInstalled);
    displayMode.addEventListener("change", syncInstalledState);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleInstalled);
      displayMode.removeEventListener("change", syncInstalledState);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) {
      setShowInstructions(true);
      return;
    }

    await installPrompt.prompt();

    const result = await installPrompt.userChoice;
    setInstallPrompt(null);

    if (result.outcome === "accepted") {
      setIsInstalled(true);
    }
  };

  if (isInstalled) return null;

  return (
    <>
      <button
        onClick={handleInstall}
        className="fixed bottom-6 left-4 z-50 rounded-full border border-primary bg-secondary px-4 py-3 text-sm font-bold text-text shadow-xl transition hover:-translate-y-1 hover:bg-secondary/90 sm:left-6"
      >
        Install App
      </button>

      {showInstructions && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setShowInstructions(false)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="install-title"
            className="w-full max-w-sm border border-primary/20 bg-background p-6 text-text shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h2 id="install-title" className="text-lg font-bold text-primary">
                Install RAFIKI PET GROOMERS
              </h2>
              <button
                onClick={() => setShowInstructions(false)}
                className="text-2xl leading-none text-text/65 hover:text-primary"
                aria-label="Close install instructions"
              >
                &times;
              </button>
            </div>
            <p className="text-sm leading-6 text-text/80">
              {isIOS
                ? "In Safari, tap the Share button, then choose Add to Home Screen."
                : "Open your browser menu and choose Install app or Add to Home screen."}
            </p>
            <p className="mt-3 text-xs leading-5 text-text/65">
              If that option is unavailable, open this website in Safari on
              iPhone or Chrome on Android.
            </p>
          </section>
        </div>
      )}
    </>
  );
}

export default InstallApp;