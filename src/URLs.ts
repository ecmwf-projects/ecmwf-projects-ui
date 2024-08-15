export const C3SURL = "https://climate.copernicus.eu/"
export const CAMSURL = "https://atmosphere.copernicus.eu/"
export const CEMSURL = "https://emergency.copernicus.eu/"
export const CopernicusURL = "https://www.copernicus.eu/en"
export const ECMWFURL = "https://www.ecmwf.int/"
export const EUProgrammeURL = "https://www.copernicus.eu/en"


export const organisationURL = (
    organisation: "c3s" | "cams" | "cems" | "copernicus" | "ecmwf" | "eu"
) => {
  switch(organisation) {
    case "c3s":
      return C3SURL
    case "cams":
      return CAMSURL
    case "cems":
      return CEMSURL
    case "copernicus":
      return CopernicusURL
    case "ecmwf":
      return ECMWFURL
    case "eu":
      return EUProgrammeURL
  }
}