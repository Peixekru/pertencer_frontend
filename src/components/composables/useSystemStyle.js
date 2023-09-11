export function useSystemColors(index) {

    const systemThemes =
        [
            "light",
            "customLightTheme",
            "dark",
            "customDarkTheme"
        ];

    return systemThemes[index];

}