let validateForms = function(selector, rules, successModal, yaGoal) {
    new window.JustValidate(selector, {
        rules: rules,
        submitHandler: function(form_1) {
            let formData = new formData(form_1);

            let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log("Отправленно!")
                    }
                }
            }

            xhr.open("post", "mail.php", true);
            xhr.send(FormData);

            form_1.reset();
        }
    });
}

validateForms(".form_1", 
{
    email: 
    {
        required: true, 
        email: true
    }
}, ".thanks-popup", "sent goal");