import { navigate } from "./navigate"
import { BASE_URL } from "../constants/links"

export const showCourse = (id) => {
    const link = `${BASE_URL}/course/view.php?id=${id}`
    navigate(link)
}