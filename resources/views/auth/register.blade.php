<x-guest-layout>
    <x-auth-card>
    <!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Авторизация | ИдёмВКино</title>
  <!-- <link rel="stylesheet" href="/css/admin_normalizemoonbase.css"> -->
  <link rel="stylesheet" href="/css/admin_moonbase.css">
  <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&amp;subset=cyrillic,cyrillic-ext,latin-ext" rel="stylesheet">
</head>

<body>

  <header class="page-header">
    <h1 class="page-header__title">Идём<span>в</span>кино</h1>
    <span class="page-header__subtitle">Администраторррская</span>
  </header>
  
  <main>
    <section class="login">
      <header class="login__header">
        <h2 class="login__title">Авторизация</h2>
      </header>
      <div class="login__wrapper">
        <form class="login__form" method="POST" action="{{ route('register') }}" accept-charset="utf-8">
        @csrf
            <label class="login__label" for="name">
                Имя
                <input id="name" class="login__input" type="text" name="name" :value="old('name')" required autofocus>
            </label>
          <label class="login__label" for="mail">
            E-mail
            <input id="email" class="login__input" type="email" name="email" :value="old('email')" required autofocus>
          </label>
          <label class="login__label" for="pwd">
            Пароль
            <input id="password" class="login__input" type="password" placeholder="" name="password" required>
          </label>
            <!--Подтверждение регистрации-->
          <label class="login__label" for="password_confirmation">
            Пдтвердите пароль
            <input id="password_confirmation" class="login__input" type="password" placeholder="" name="password_confirmation" required>
          </label>
          <div class="text-center">
            <input value="Регистрация" type="submit" class="login__button">
          </div>
        </form>
      </div>
    </section>
  </main>

  <script src="js/admin_moonbase.js"></script>
</body>
</html>
    </x-auth-card>
</x-guest-layout>
