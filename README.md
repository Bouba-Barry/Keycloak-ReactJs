# Keycloak React Js
utiliser npm install après clone.
Une application en react qui va une fois authentifier avec keycloak acceder à la partie Backend aussi sécurisé (spring boot ) .
on utilisera le token donnée par keycloak pour vérifier l'accès de l'utilisateur et raméner les données de notre backend .

Prérequis:
1. Ajouter un client au même territoire(keycloak realm)  que notre backend .
   ![image](https://github.com/Bouba-Barry/Keycloak-ReactJs/assets/96130733/e13fe651-972e-44b0-b5e5-f880a629f16d)

![image](https://github.com/Bouba-Barry/Keycloak-ReactJs/assets/96130733/a675909e-c2b1-44ea-a493-9b27cb092c92)
![image](https://github.com/Bouba-Barry/Keycloak-ReactJs/assets/96130733/21733cfc-a783-41e9-bedd-8be461ecfa31)

2. Designer le proof of key , l'algorithme
   ![image](https://github.com/Bouba-Barry/Keycloak-ReactJs/assets/96130733/62611cf5-7659-49c0-bdad-44818688de1a)
3. Ajouter un client Scope créer à notre client_id.
   ![image](https://github.com/Bouba-Barry/Keycloak-ReactJs/assets/96130733/b4181fe1-e4c7-4ac5-83e8-00c9dd47437e)


Workflow:
![image](https://github.com/Bouba-Barry/Keycloak-ReactJs/assets/96130733/cad77365-3b87-4f95-865d-60cd47e538b0)
