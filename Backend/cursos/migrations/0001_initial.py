# Generated by Django 4.2.1 on 2023-06-04 02:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('usuarios', '0003_alter_estudiante_options_alter_profesor_options_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Asignatura',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_asignatura', models.CharField(choices=[('Lenguaje', 'Lenguaje'), ('Matemáticas', 'Matemáticas'), ('Ciencias', 'Ciencias'), ('Sociales', 'Sociales')], max_length=20)),
            ],
            options={
                'verbose_name': 'Asignatura',
                'verbose_name_plural': 'Asignaturas',
                'db_table': 'asignatura',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Seccion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name': 'Seccion',
                'verbose_name_plural': 'Seccions',
                'db_table': 'seccion',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Curso',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('anio', models.PositiveIntegerField()),
                ('grado', models.CharField(choices=[('7', 'Septimo'), ('8', 'Octavo'), ('9', 'Noveno')], max_length=1)),
                ('estudiantes', models.ManyToManyField(related_name='estudiantes', to='usuarios.estudiante')),
                ('seccion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cursos.seccion')),
            ],
            options={
                'verbose_name': 'Curso',
                'verbose_name_plural': 'Cursos',
                'db_table': 'curso',
                'managed': True,
                'unique_together': {('anio', 'seccion', 'grado')},
            },
        ),
        migrations.CreateModel(
            name='Contenido',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=100)),
                ('tipo_contenido', models.CharField(choices=[('lectura', 'Lectura'), ('enlace', 'Enlace')], max_length=20)),
                ('contenido', models.TextField()),
                ('asignatura', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cursos.asignatura')),
            ],
            options={
                'verbose_name': 'Contenido',
                'verbose_name_plural': 'Contenidos',
                'db_table': 'contenido',
                'managed': True,
            },
        ),
        migrations.AddField(
            model_name='asignatura',
            name='curso',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cursos.curso'),
        ),
        migrations.AddField(
            model_name='asignatura',
            name='profesor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='usuarios.profesor'),
        ),
    ]
