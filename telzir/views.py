from django.shortcuts import render, render_to_response,RequestContext
from django.template import RequestContext
from django.contrib.auth import authenticate, login
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth import logout
from .models import Plano
from .forms import *

# Create your views here.
def index(request):
	return render( request,'index.html')

def tarifa(request):
	return render( request,'tarifa.html')

def about(request):
	return render( request,'about.html')


def register(request):
    # Like before, get the request's context.
    context = RequestContext(request)

    # A boolean value for telling the template whether the registration was successful.
    # Set to False initially. Code changes value to True when registration succeeds.
    registered = False

    # If it's a HTTP POST, we're interested in processing form data.
    if request.method == 'POST':
        # Attempt to grab information from the raw form information.
        # Note that we make use of both UserForm and UserProfileForm.
        user_form = UserForm(data=request.POST)
       # profile_form = UserProfileForm(data=request.POST)

        # If the two forms are valid...
        if user_form.is_valid():
            # Save the user's form data to the database.
            user = user_form.save()

            user.set_password(user.password)
            user.save()
            registered = True

        else:
            print user_form.errors
    # Not a HTTP POST, so we render our form using two ModelForm instances.
    # These forms will be blank, ready for user input.
    else:
        user_form = UserForm()
       # profile_form = UserProfileForm()

    # Render the template depending on the context.
    return render_to_response(
            './register.html',
            {'user_form': user_form, 'registered': registered},
            context)

def user_login(request):
    # Like before, obtain the context for the user's request.
    context = RequestContext(request)

    # If the request is a HTTP POST, try to pull out the relevant information.
    if request.method == 'POST':
        # Gather the username and password provided by the user.
        # This information is obtained from the login form.
        username = request.POST['username']
        password = request.POST['password']

        # Use Django's machinery to attempt to see if the username/password
        # combination is valid - a User object is returned if it is.
        user = authenticate(username=username, password=password)

        # If we have a User object, the details are correct.
        # If None (Python's way of representing the absence of a value), no user
        # with matching credentials was found.
        if user:
            # Is the account active? It could have been disabled.
            if user.is_active:
                # If the account is valid and active, we can log the user in.
                # We'll send the user back to the homepage.
                login(request, user)
                return HttpResponseRedirect('/')
            else:
                # An inactive account was used - no logging in!
                return HttpResponse("sua conta foi desabilitada.")
        else:
            # Bad login details were provided. So we can't log the user in.
            print "Invalid login details: {0}, {1}".format(username, password)
            return HttpResponse("informacoes forncecidas estao erradas.")

    # The request is not a HTTP POST, so display the login form.
    # This scenario would most likely be a HTTP GET.
    else:
        # No context variables to pass to the template system, hence the
        # blank dictionary object...
        return render_to_response('./login.html', {}, context)

def user_logout(request):
    # Since we know the user is logged in, we can now just log them out.
    logout(request)

    # Take the user back to the homepage.
    return HttpResponseRedirect('/')

def contato(request):
    if request.method == "POST":
        form = contatoForm(request.POST)
        if form.is_valid():
            post = form.save(commit=True)
            post.author = request.user
            post.save()
            return HttpResponseRedirect('/')
    else:
        form = contatoForm()
    return render( request,'contato.html', {'form': form})

def planoextra(request):
	return render( request,'planoextra.html', {'plano': Plano.objects.all()})