sed -i \
    -e s,videos,'<%= pluralName %>',g \
    -e s,Video,'<%= classedName %>',g \
    -e s,video,'<%= name %>',g \
    -e s,title,'<%= firstParam %>',g \
    templates/test/*.js
       