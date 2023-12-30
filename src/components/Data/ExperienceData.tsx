import html from '../../assets/html.png';
import nodeJs from '../../assets/nodeJs.jpg';
import flutter from '../../assets/flutter.png';
import angular from '../../assets/angular.png';
import cSharp from '../../assets/cSharp.png';
import cPlusPlus from '../../assets/cPlusPlus.png';
import css from '../../assets/css.png';
import dotnet from '../../assets/dotnet.png';
import javascript from '../../assets/javascript.webp';
import noSql from '../../assets/nosql.png';
import php from '../../assets/php.png';
import python from '../../assets/python.png';
import react from '../../assets/react.png';
import sql from '../../assets/sql.png';
import unity from '../../assets/unity.png';
import { ExperienceCardType } from '../Interfaces';

export const heading = 'Experience';
export const experiences: ExperienceCardType[] = [
    {
        title: 'React',
        imageSrc: react,
        style: 'shadow-cyan-300',
    },
    {
        title: 'Angular',
        imageSrc: angular,
        style: 'shadow-red-800',
    },
    {
        title: 'NodeJs',
        imageSrc: nodeJs,
        style: 'shadow-green-900',
    },
    {
        title: 'Flutter',
        imageSrc: flutter,
        style: 'shadow-sky-600',
    },
    {
        title: 'Javascript',
        imageSrc: javascript,
        style: 'shadow-yellow-300',
    },
    {
        title: 'Python',
        imageSrc: python,
        style: 'shadow-sky-400',
    },
    {
        title: 'HTML',
        imageSrc: html,
        style: 'shadow-orange-500',
    },
    {
        title: 'C#',
        imageSrc: cSharp,
        style: 'shadow-violet-600',
    },
    {
        title: 'C++',
        imageSrc: cPlusPlus,
        style: 'shadow-gray-700',
    },
    {
        title: 'Dotnet',
        imageSrc: dotnet,
        style: 'shadow-violet-800',
    },
    {
        title: 'No SQL',
        imageSrc: noSql,
        style: 'shadow-sky-900',
    },
    {
        title: 'PHP',
        imageSrc: php,
        style: 'shadow-slate-600',
    },
    {
        title: 'SQL',
        imageSrc: sql,
        style: 'shadow-cyan-400',
    },
    {
        title: 'Unity',
        imageSrc: unity,
        style: 'shadow-slate-700',
    },
    {
        title: 'CSS',
        imageSrc: css,
        style: 'shadow-blue-400',
    },
]