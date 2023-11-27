import { config } from "@/config/config";

export const getUser = async (user: string) => {
    try {
        const reponse = await fetch(`${config.api.github}/${user}`)
        const json = await reponse.json();
        return json;
    } catch (error) {
        throw error;
    }
}