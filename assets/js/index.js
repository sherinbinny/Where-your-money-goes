document.addEventListener('DOMContentLoaded', function()
{
    document.addEventListener('click', function(event)
    {
        if(event.target.matches('.btn-78'))
        {
            document.querySelector('#btn-22').classList.add('d-none');
            document.querySelector('#btn-78').classList.remove('d-none');
        }
        else if(event.target.matches('.btn-22'))
        {
            document.querySelector('#btn-78').classList.add('d-none');
            document.querySelector('#btn-22').classList.remove('d-none');
        }
    });

});