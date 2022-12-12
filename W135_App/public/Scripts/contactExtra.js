

const container = document.createElement('section');
container.classList.add("containerForm");
body.insertBefore(container, SecondNav);

    const field = document.createElement('fieldset');
    container.appendChild(field);

        const legend = document.createElement('legend');
        const node1 = document.createTextNode("Contact Form");
        const i = document.createElement('i');
        i.setAttribute("class", "fa-solid fa-adress-book");
        legend.appendChild(node1);
        legend.appendChild(i);
        field.appendChild(legend);

        const formBlock = document.createElement('form');
        formBlock.setAttribute("id", "form");
        formBlock.setAttribute("action", "");
        formBlock.setAttribute("method", "post");
        field.appendChild(formBlock);

             const asterisk = document.createElement('p');
             const content = document.createTextNode("required information is marked with an asterisk (*)");
             asterisk.appendChild(content);
             formBlock.appendChild(asterisk);

             const content6 = document.createTextNode(" :");

            //First name input
             const labelFName = document.createElement('label');
             labelFName.setAttribute("for", "firstname");
             const content2 = document.createTextNode("First Name* ");
             labelFName.appendChild(content2);
             const iFa = document.createElement('i');
             iFa.setAttribute("class", "fa fa-user");
             iFa.setAttribute("aria-hidden", "false");
             labelFName.appendChild(iFa);
             iFa.appendChild(content6);
             formBlock.appendChild(labelFName);

            const inputFName = document.createElement('input');
            inputFName.setAttribute("type", "text");
            inputFName.setAttribute("id", "firstName");
            inputFName.setAttribute("name", "First Name");
            inputFName.setAttribute("placeholder", "Your Name");
            inputFName.setAttribute("required", "");
            labelFName.insertAdjacentElement('afterend', inputFName);

            //Last name input
             const labelLName = document.createElement('label');
             labelLName.setAttribute("for", "lastName");
             const content3 = document.createTextNode("Last Name* ");
             labelLName.appendChild(content3);
             const iFa2 = document.createElement('i');
             iFa2.setAttribute("class", "fa fa-user");
             labelLName.appendChild(iFa2);
             iFa2.appendChild(content6);
             formBlock.appendChild(labelLName);

             const inputLName = document.createElement('input');
            inputLName.setAttribute("type", "text");
            inputLName.setAttribute("id", "lastName");
            inputLName.setAttribute("name", "Last Name");
            inputLName.setAttribute("placeholder", "Your Name");
            inputLName.setAttribute("required", "");
            formBlock.appendChild(inputLName);

                               
            //Email input
            const labelMail = document.createElement('label');
             labelMail.setAttribute("for", "email");
             const content4 = document.createTextNode("Email* ");
             labelMail.appendChild(content4);
             const iFa3 = document.createElement('i');
             iFa3.setAttribute("class", "fa-regular fa-envelope");
             labelMail.appendChild(iFa3);
             iFa3.appendChild(content6);
             formBlock.appendChild(labelMail);

             const inputMail = document.createElement('input');
             inputMail.setAttribute("type", "email");
             inputMail.setAttribute("id", "email");
             inputMail.setAttribute("name", "E-mail");
             inputMail.setAttribute("placeholder", "Email id");
             inputMail.setAttribute("required", "");
             formBlock.appendChild(inputMail);

             //Phone input
             const labelPhone = document.createElement('label');
             labelPhone.setAttribute("for", "phone");
             const content5 = document.createTextNode("Phone* ");
             labelPhone.appendChild(content5);
             const iFa4 = document.createElement('i');
             iFa4.setAttribute("class", "fa fa-phone");
             labelPhone.appendChild(iFa4);
             iFa4.appendChild(content6);
             formBlock.appendChild(labelPhone);

             const inputPhone = document.createElement('input');
             inputPhone.setAttribute("type", "text");
             inputPhone.setAttribute("id", "phone");
             inputPhone.setAttribute("name", "Phone Number");
             inputPhone.setAttribute("placeholder", "Phone no.");
             inputPhone.setAttribute("required", "");
             formBlock.appendChild(inputPhone);

            //Message input
            const labelMsg = document.createElement('label');
             labelMsg.setAttribute("for", "message");
             const content7 = document.createTextNode("Message* ");
             labelMsg.appendChild(content7);
             const iFa5 = document.createElement('i');
             iFa5.setAttribute("class", "fa-regular fa-message");
             labelMsg.appendChild(iFa5);
             iFa5.appendChild(content6);
             formBlock.appendChild(labelMsg);

             const textArea = document.createElement('textarea');
             textArea.setAttribute("type", "text");
             textArea.setAttribute("id", "message");
             textArea.setAttribute("rows", "4");
             textArea.setAttribute("name", "Message");
             textArea.setAttribute("placeholder", "How can we help you?");
             textArea.setAttribute("required", "");
             formBlock.appendChild(textArea);

            //Submit button
            const submit = document.createElement('button');
            submit.setAttribute("type", "submit");
            submit.setAttribute("value", "Send Now");
            submit.setAttribute("id", "submit");
            const content8 = document.createTextNode("Send");
            submit.appendChild(content8);
            formBlock.appendChild(submit);

        const postResp = document.createElement('p');
        postResp.setAttribute("id", "post-response");
        field.appendChild(postResp);





            