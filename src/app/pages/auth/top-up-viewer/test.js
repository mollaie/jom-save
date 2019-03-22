function createForm(){
    var form = document.createForm("form");
    form.method="post";
    form.setAttribute("action",url);
    var field1 = document.createElement("input");
    field1.setAttribute("type","hidden");
    field1.setAttribute("name","MerchantId");
    field1.setAttribute("value","");
    form.appendChild(field1);

    field2.setAttribute("type","hidden");
    field2.setAttribute("name","orderAmount");
    field2.setAttribute("value","");
    form.appendChild(field2);

    field3.setAttribute("type","hidden");
    field3.setAttribute("name","OrderRef");
    field3.setAttribute("value","");
    form.appendChild(field3);

    field4.setAttribute("type","hidden");
    field4.setAttribute("name","SuccessUrl");
    field4.setAttribute("value","");
    form.appendChild(field4);

    field5.setAttribute("type","hidden");
    field5.setAttribute("name","FailUrl");
    field5.setAttribute("value","");
    form.appendChild(field5);

    field6.setAttribute("type","hidden");
    field6.setAttribute("name","ErrorUrl");
    field6.setAttribute("value","");
    form.appendChild(field6);

    field7.setAttribute("type","hidden");
    field7.setAttribute("name","Hash");
    field7.setAttribute("value","");
    form.appendChild(field7);

    field8.setAttribute("type","hidden");
    field8.setAttribute("name","Lang");
    field8.setAttribute("value","E");
    form.appendChild(field8);

    field9.setAttribute("type","hidden");
    field9.setAttribute("name","paymentType");
    field9.setAttribute("value","N");
    form.appendChild(field9);

    field10.setAttribute("type","hidden");
    field10.setAttribute("name","currCode");
    field10.setAttribute("value","");
    form.appendChild(field10);

    field11.setAttribute("type","hidden");
    field11.setAttribute("name","payType");
    field11.setAttribute("value","");
    form.appendChild(field11);

    field12.setAttribute("type","hidden");
    field12.setAttribute("name","remark");
    field12.setAttribute("value","");
    form.appendChild(field12);

    field13.setAttribute("type","hidden");
    field13.setAttribute("name","cardNo");
    field13.setAttribute("value","");
    form.appendChild(field3);

    field14.setAttribute("type","hidden");
    field14.setAttribute("name","securityCode");
    field14.setAttribute("value","");
    form.appendChild(field14);

    field15.setAttribute("type","hidden");
    field15.setAttribute("name","epMonth");
    field15.setAttribute("value","");
    form.appendChild(field15);

    field16.setAttribute("type","hidden");
    field16.setAttribute("name","epYear");
    field16.setAttribute("value","");
    form.appendChild(field16);

    field17.setAttribute("type","hidden");
    field17.setAttribute("name","cardHolder");
    field17.setAttribute("value","");
    form.appendChild(field17);

    field18.setAttribute("type","hidden");
    field18.setAttribute("name","pMethod");
    field18.setAttribute("value","");
    form.appendChild(field18);

    form.submit();

    var form = '<form id="form" action="'+url+'" method="post">' +
    '<input type="hidden" name="MerchantId" value="' + model.MerchantId + '">' +
    '<input type="hidden" name="amount" value="' + model.orderAmount + '">' +
    '<input type="hidden" name="OrderRef" value="' + model.OrderRef + '">' +
    '<input type="hidden" name="SuccessUrl" value="' + model.SuccessUrl + '">' +
    '<input type="hidden" name="FailUrl" value="' + model.FailUrl + '">' +
    '<input type="hidden" name="ErrorUrl" value="' + model.ErrorUrl + '">' +
    '<input type="hidden" name="Hash" value="' + model.Hash + '">' +
    '<input type="hidden" name="Lang" value="E">' +
    '<input type="hidden" name="paymentType" value="N">' +
    '<input type="hidden" name="currCode" value="">' +
    '<input type="hidden" name="payType" value="">' +
    '<input type="hidden" name="remark" value="">' +
    '<input type="hidden" name="cardNo" value="' + model.cardNo + '">' +
    '<input type="hidden" name="securityCode" value="' + model.securityCode + '">' +
    '<input type="hidden" name="epMonth" value="' + model.epMonth + '">' +
    '<input type="hidden" name="epYear" value="' + model.epYear + '">' +
    '<input type="hidden" name="cardHolder" value="' + model.cardHolder + '">' +
    '<input type="hidden" name="pMethod" value="' + model.pMethod + '">' +
    '</form> <script type="text/javascript"> '
    var body = document.getElementsByTagName("BODY")[0];
    body.append(form)
    document.getElementById('form')[0].submit()
}