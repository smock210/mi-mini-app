export let method = [
    {
        "name": "VKWebAppClose",
        "description":"Закрыть приложение.",
        "params": [{
            "param": 'status',
            "type": 'string',
            "description": 'статус закрытия приложения, передаваемый в родительское приложение. Возможные значения:\n' +
                '•\n' +
                'failed;\n' +
                '•\n' +
                'success.'
        },
        {
            "param": "payload",
            "type": 'object',
            "description": 'данные, передаваемые в родительское приложение.'
        }
        ]
    }
]