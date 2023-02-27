const ErrorHandling = (response:Response) => {
    console.log(response.status, response.statusText);
    if(response.status === 401){
        localStorage.setItem('accessToken', '');
        localStorage.setItem('expiresIn', '');
        window.location.href = '/';
    }
}

export default ErrorHandling;

export const showAlert = (text:string) => {
    alert(text);
}