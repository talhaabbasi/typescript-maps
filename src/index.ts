import { User } from "./User"
import { Company } from "./Company"

const user = new User()
const company = new Company()

new google.maps.Map(document.getElementById("map"), {
  zoom: 1,
  center: {
    lat: user.location.lat,
    lng: user.location.lng,
  },
})
