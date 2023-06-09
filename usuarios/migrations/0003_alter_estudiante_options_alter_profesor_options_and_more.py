# Generated by Django 4.2.1 on 2023-06-04 02:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('usuarios', '0002_estudiante_profesor'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='estudiante',
            options={'managed': True, 'verbose_name': 'Estudiante', 'verbose_name_plural': 'Estudiantes'},
        ),
        migrations.AlterModelOptions(
            name='profesor',
            options={'managed': True, 'verbose_name': 'Profesor', 'verbose_name_plural': 'Profesors'},
        ),
        migrations.AlterModelOptions(
            name='usuario',
            options={'managed': True, 'verbose_name': 'Usuario', 'verbose_name_plural': 'Usuarios'},
        ),
        migrations.AlterModelTable(
            name='estudiante',
            table='estudiante',
        ),
        migrations.AlterModelTable(
            name='profesor',
            table='profesor',
        ),
        migrations.AlterModelTable(
            name='usuario',
            table='usuario',
        ),
    ]
