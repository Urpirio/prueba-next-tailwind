
'use client';

const handleSubmit = async () => {

    fetch('https://randomapi.com/api/48df2ba005a75119de81db1af5d410bc').then(
        (Answer) => Answer.json()
    ).then(
        (Data) => {
            const LargeArray = Data.results[0].user.length;
            for(let x = 0 ; x < LargeArray; x++){
                if(document.getElementById('user').value == Data.results[0].user[x].username){
                    if(document.getElementById('password').value == Data.results[0].user[x].password){
                        window.location.href = '/Home';
                    }else{
                        
                    }
                }else{
                    continue;
                }
            }
        }
    )
};

export default handleSubmit;