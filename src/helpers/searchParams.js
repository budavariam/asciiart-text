import { fonts } from "../helpers/fonts.js"
import { layout } from "../helpers/layout"
import { outputFormat } from "../helpers/outputFormat"

const settingsSearchParams = {
    text: "text",
    font: "font",
    width: "width",
    hl: "hl",
    vl: "vl",
    wb: "wb",
    fmt: "fmt",
}

export const getSettingsFromSearchParams = () => {
    const res = {}
    const searchParams = new URLSearchParams(window.location.search);

    const textValue = searchParams.get(settingsSearchParams.text)
    if (textValue) {
        res["text"] = decodeURIComponent(textValue)
    }
    const fontValue = searchParams.get(settingsSearchParams.font)
    if (fontValue && fonts[fontValue]) {
        res["font"] = fonts[fontValue]
    }
    const widthValue = searchParams.get(settingsSearchParams.width)
    if (widthValue) {
        const widthNum = parseInt(widthValue, 10)
        if (widthNum) {
            res["width"] = widthNum 
        }
    }
    const hlValue = searchParams.get(settingsSearchParams.hl)
    if (hlValue) {
        res["horizontalLayout"] = hlValue
    }
    const vlValue = searchParams.get(settingsSearchParams.vl)
    if (vlValue && layout[vlValue]) {
        res["verticalLayout"] = layout[vlValue]
    }
    const fmtValue = searchParams.get(settingsSearchParams.fmt)
    if (fmtValue && outputFormat[fmtValue]) {
        res["fmt"] = outputFormat[fmtValue]
    }
    const wbValue = searchParams.get(settingsSearchParams.wb)
    if (wbValue) {
        // if wb is defined and not resemble to false then set it to true
        const wb = wbValue.toLowerCase() !== "false"
        res["whitespaceBreak"] = wb
    }
    return res
}

export const createSearchParamsFromSettings = (settings) => {
    const params = [
        ["text", encodeURIComponent(settings.text)],
        ["font", settings.font.fontKey],
        ["width", settings.width],
        ["horizontalLayout", settings.horizontalLayout],
        ["verticalLayout", settings.verticalLayout],
        ["whitespaceBreak", settings.whitespaceBreak],
        ["fmt", settings.fmt.value],
    ]
    const searchParams = new URLSearchParams(params).toString();
    //console.debug("Generate searchParams %s from %o", searchParams, settings)
    return searchParams
}