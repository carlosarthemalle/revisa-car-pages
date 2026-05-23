const userAgent = navigator.userAgent || navigator.vendor || "";
const isIOS = /iPad|iPhone|iPod/.test(userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const isAndroid = /Android/i.test(userAgent);
const recommendedStore = isIOS ? "ios" : isAndroid ? "android" : "";

if (recommendedStore) {
    document
        .querySelector(`[data-store="${recommendedStore}"]`)
        ?.classList.add("recommended");
}
