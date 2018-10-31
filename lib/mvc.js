let router = null;

export function addRoute ({url, controller, template, view})
{

    router.add(url, function () 
    {
        if (controller === Object(controller) && controller.run)
        // on vérifie que la variable est un objet & qu'une propriété existe
        {
            controller.run();
        }
        
        if (template !== undefined)
        {
            window.fetch(`./views/${template}`)
            .then(function(response) {
              return response.text(); // retourne la réponse http brut sous forme d'objet
            })
            .then(function(htmlTemplate) {
                document.querySelector('main').innerHTML=htmlTemplate;
                if (view === Object(view) && view.run)
                // on vérifie que la variable est un objet & qu'une propriété existe
                {
                    view.run();
                }
            });
        }
    });
};

export function initialize()
{
    router = new Router({
        mode: 'hash'
    });
};

export function run ()
{
    if(router === null)
    {
        throw new Error("Cette route n'existe pas");
    }
    router.addUriListener().check();
}