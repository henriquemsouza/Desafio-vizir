# Show me the code
***
[Versao  online](http://telzir-vizir.herokuapp.com/ "veja mais")
### Desenvolvido usando:
* Django framework
* Python
* Javascript
* HTML e CSS
* hospedado  com Heroku

# Como rodar o projeto localmente
1. installe  virtualenv
```
sudo pip install -U pip setuptools virtualenv
 ```

2. Criar virtualenv:
 ```
virtualenv <venvs_path>/vyenv/ -p python2.7
 ```
 
3. Clone o repositorio

 
 4. Ative sua virtualenv :
 ```
 source <venvs_path/vyenv/bin/activate
 ```
 5. dentro da pasta do projeto install all dependencies:
 ```
 pip install -U pip && pip install -r requirements.txt
 ```
6. python manage.py migrate
7. python manage.py makemigrations
8. python manage.py createsuperuser
9. python manage.py runserver

### OBS: necessario colocar  informaçoes do database  no arquivo settings.py

## Preview:
![Screenshot_2017-09-25-10-04-12.jpg](https://github.com/henriquemsouza/images/blob/master/home.JPG?raw=true)
![Screenshot_2017-09-25-10-04-12.jpg](https://github.com/henriquemsouza/images/blob/master/calc.JPG?raw=true)


