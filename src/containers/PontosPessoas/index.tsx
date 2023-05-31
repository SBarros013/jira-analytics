import axios from "axios";
import { getBearerToken } from "../../Integrations/Jira"

export const PontosPessoas = () => {

    const getIssues = () => {
        axios.get(`https://api.atlassian.com/ex/jira/6e5e91ae-2597-4e58-a6e7-69e842990453/rest/api/latest/search?jql=project = "SAD" AND type = "Subtarefa"&fields=customfield_10010,labels,resolutiondate,customfield_10039,status,assignee`, {
            headers: {
                "Authorization": "Bearer eyJraWQiOiJmZTM2ZThkMzZjMTA2N2RjYTgyNTg5MmEiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2MjcyZGJlZjJkYjMwODAwNzAyNTI5NjQiLCJuYmYiOjE2NzQ1MzIwODksImlzcyI6Imh0dHBzOi8vYXRsYXNzaWFuLWFjY291bnQtcHJvZC5wdXMyLmF1dGgwLmNvbS8iLCJpYXQiOjE2NzQ1MzIwODksImV4cCI6MTY3NDUzNTY4OSwiYXVkIjoidzZRNHdaMnpldkdnakhtaUoybnRLaWJ6WEdkODl5b3IiLCJqdGkiOiJhZTUyOGEzNC1jNDFkLTQyZjktOWYxMC05ZjZiOTA3YzVmYmYiLCJodHRwczovL2F0bGFzc2lhbi5jb20vdmVyaWZpZWQiOnRydWUsImh0dHBzOi8vaWQuYXRsYXNzaWFuLmNvbS9zZXNzaW9uX2lkIjoiODY2ZGY5ZDMtYmY5Ni00YjM5LTg2NjItYWFkZjNhMDMyOTAwIiwiY2xpZW50X2lkIjoidzZRNHdaMnpldkdnakhtaUoybnRLaWJ6WEdkODl5b3IiLCJjbGllbnRfYXV0aF90eXBlIjoiUE9TVCIsImh0dHBzOi8vYXRsYXNzaWFuLmNvbS9zeXN0ZW1BY2NvdW50RW1haWwiOiJjMGU1ZDFiMi02MzcxLTRmNDAtODFmZi1jNTU0MDFkZTA4NjhAY29ubmVjdC5hdGxhc3NpYW4uY29tIiwiaHR0cHM6Ly9pZC5hdGxhc3NpYW4uY29tL3VqdCI6ImM0YzNjNDY2LThlZjctNDFmYi05YWQ2LTRmMmM1YWI4MTA0OCIsImh0dHBzOi8vaWQuYXRsYXNzaWFuLmNvbS92ZXJpZmllZCI6dHJ1ZSwiaHR0cHM6Ly9pZC5hdGxhc3NpYW4uY29tL2F0bF90b2tlbl90eXBlIjoiQUNDRVNTIiwic2NvcGUiOiJtYW5hZ2U6amlyYS1wcm9qZWN0IG1hbmFnZTpqaXJhLWNvbmZpZ3VyYXRpb24gcmVhZDpqaXJhLXdvcmsgbWFuYWdlOmppcmEtZGF0YS1wcm92aWRlciB3cml0ZTpqaXJhLXdvcmsgbWFuYWdlOmppcmEtd2ViaG9vayByZWFkOmppcmEtdXNlciIsImh0dHBzOi8vYXRsYXNzaWFuLmNvbS8zbG8iOnRydWUsImh0dHBzOi8vYXRsYXNzaWFuLmNvbS9vYXV0aENsaWVudElkIjoidzZRNHdaMnpldkdnakhtaUoybnRLaWJ6WEdkODl5b3IiLCJodHRwczovL2F0bGFzc2lhbi5jb20vZW1haWxEb21haW4iOiJwcmF2YWxlci5jb20uYnIiLCJodHRwczovL2F0bGFzc2lhbi5jb20vc3lzdGVtQWNjb3VudEVtYWlsRG9tYWluIjoiY29ubmVjdC5hdGxhc3NpYW4uY29tIiwiaHR0cHM6Ly9hdGxhc3NpYW4uY29tL2ZpcnN0UGFydHkiOmZhbHNlLCJodHRwczovL2F0bGFzc2lhbi5jb20vc3lzdGVtQWNjb3VudElkIjoiNjNjZjRlMGY4YzMwMThjYThhMWI0ODQ2In0.k1aY0Bw4LGonPjdnYnSK4TS92CDbsFQ2p0RsJcZsJd36wqRNsJeSbDlAK3cxKbblCrFjr75XdOrHDxCuZe3cb88TkGdyK5Q422Y3Uk43muDeQAXJtonT25fuBoE3apwoDi8NkNpvvAH8br3_FFHA-19t5sMsM7AKQN8ksepSUp6Xn7vy8or4Y1FmygFRjtl7RChqm0J6iE4ctA9zJVnBfIPbuaSzVV46PqosjZzqC-ZXzN0NpEbjfr2F_Jyi-UOOhVbkLXhPFeDhjNF3mK6-6QwOxzDSlYusxsVynx8jc9eoFTb_9VOwpnVL2UtLcEot-NM28ho5fAEB8IaVU3dQwA"
            }
        }).then((data) => {
            console.log(data);
        })
    }

    getIssues();

    // const authenticate = async () => {
    //     console.log("autenticando");
    //     await getBearerToken();
    // }

    // authenticate();

    return (
        <>
            <h1>Teste</h1>
        </>
    )
}