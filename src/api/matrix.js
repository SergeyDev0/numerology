export function Response({ type }) {
    let text;
    
    if(type === 'text') {
        text = 'text';
    }

    data = {

    };

    fetch(`https://example.com/${text}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Basic 123456'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        return response.text();
    })
    .then(data => {
        console.log(data);
    });
} 