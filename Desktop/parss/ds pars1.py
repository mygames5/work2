import csv
import re
from pprint import pprint


with open("phonebook_raw.csv", encoding="utf-8") as f:
    rows = csv.reader(f, delimiter=",")
    contacts_list = list(rows)

# TODO 1: Привести Фамилию, Имя, Отчество к стандартному виду
def normalize_names(contact):
    fio = ' '.join(contact[:3]).split()  # Объединяем первые три элемента и разбиваем по пробелам
    contact[:3] = fio + [''] * (3 - len(fio))  # Дополняем недостающими элементами (если их меньше 3)
    return contact

contacts_list = [normalize_names(contact) for contact in contacts_list]

phone_pattern = re.compile(
    r"(\+7|8)?\s*\(?(\d{3})\)?[\s-]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})(\s*\(?доб\.?\s*(\d+)\)?)?"
)
phone_substitution = r"+7(\2)\3-\4-\5 доб.\7"

for contact in contacts_list:
    contact[5] = phone_pattern.sub(phone_substitution, contact[5]).strip(' доб.')

contacts_dict = {}
for contact in contacts_list[1:]: 
    name_key = (contact[0], contact[1])  # Ключ: Фамилия + Имя
    if name_key in contacts_dict:
        old_contact = contacts_dict[name_key]
        for i in range(len(contact)):
            if not old_contact[i]:  
                old_contact[i] = contact[i]
    else:
        contacts_dict[name_key] = contact


contacts_list = [contacts_list[0]] + list(contacts_dict.values())


with open("phonebook.csv", "w", encoding="utf-8") as f:
    datawriter = csv.writer(f, delimiter=',')
    datawriter.writerows(contacts_list)

pprint(contacts_list)
