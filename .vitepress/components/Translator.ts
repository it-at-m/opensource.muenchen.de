import {useData} from "vitepress";
import {messages} from "../theme/enhancements/i18n/i18n";

export function useTranslator() {

    const FALLBACK_LANG = 'en';

    const { lang } = useData();

    function t(translationKey: String): String {
        let langMap;

        if(Object.keys(messages).indexOf(lang.value) != -1) {
            langMap = messages[lang.value];
        } else {
            langMap = messages[FALLBACK_LANG];
        }

        let result = langMap;

        translationKey.split(".").forEach(key => {
            if(result.hasOwnProperty(key)) {
                result = result[key];
            } else {
                result = translationKey;
            }
        });

        return result;
    }

    // expose managed state as return value
    return { t }
}