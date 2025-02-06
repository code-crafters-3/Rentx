import { CustomTable } from "../../../components/table";

interface ITableProps {
    id: string;
    name: string;
    individualRegistration: string;
    email: string;
}

export default function ListClients () {
    return (
        <div>
           <CustomTable<ITableProps> headerFontSize={14} columns={
            [
           {
            field: 'name',
            title: 'Nome',
           },
           {
            field: 'individualRegistration',
            title: 'CPF'
           },
           {
            field: 'email',
            title: 'Email'
           },
        ]
           } data={[]} />
        </div>
    )
}