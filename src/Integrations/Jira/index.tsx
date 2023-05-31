import axios from "axios"

export const getBearerToken = async () => {
    const response = await axios.get(`https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=w6Q4wZ2zevGgjHmiJ2ntKibzXGd89yor&scope=read%3Ajira-work%20read%3Ajira-user%20manage%3Ajira-configuration%20manage%3Ajira-project%20write%3Ajira-work%20manage%3Ajira-webhook%20manage%3Ajira-data-provider&redirect_uri=https%3A%2F%2Fgoogle.com&state=authjira&response_type=code&prompt=consent`);

    console.log(response);
}