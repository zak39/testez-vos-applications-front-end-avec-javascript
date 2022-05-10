# Analyser ce qu'il faut tester

Lien de l'exercice : https://openclassrooms.com/fr/courses/7159306-testez-vos-applications-front-end-avec-javascript/7332803-adoptez-la-methodologie-des-tests-d-integration#/id/r-7332801

# Ma réponse

Ce qu'il faut tester sur la page de connection :

1. Si l'email est bon format (@, .com/.fr)
2. Si l'email et le password sont bons
3. Si ce formulaire est bien présent à la racine de l'URL : /

# Correction

1. Tester si l'email n'est pas bon, si ce n'est pas bon, alors on doit avoir le message d'erreur.

2. Tester avec un email correct mais sans mdp. Dans ce cas là on doit avoir un message d'erreur également.

3. Tester si l'email est correct mais pas le password. Dans ce cas là, on doit avoir aussi un message d'erreur.

4. Tester si l'email et le password sont corrects et redirige bien à la page d'accueil.

Voici l'issue de ces tests : https://s3.eu-west-1.amazonaws.com/course.oc-static.com/courses/7159306/Issue7.png .