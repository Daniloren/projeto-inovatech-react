const init = () => {
    const validateEmail = (event) => {
        const input = event.currentTarget
        const regex =  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
        const emailTest = regex.test(input.value);

        if(!emailTest) {
            submitButton.setAttribute('disabled, disabled');
            //input.nextE
        }
    }


    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.btn.btn-outline-success');
    console.log(inputEmail, inputPassword, submitButton);

    if(submitButton){
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(
                    {
                    email: inputEmail.value,
                    password: inputPassword.value,
                }
                // {
                //     email: "eve.holt@reqres.in",
                //     password: "cityslicka"
                // }
                )

            }).then((response) =>{
                if(response.ok)
                    window.location="index.html";
                
                    return response;
            } ).catch((err)=>{
                console.log(err);

            })
    })/*.then((data) => {
        console.log(data);
    })*/;

    }
}
    
    window.onload = init();