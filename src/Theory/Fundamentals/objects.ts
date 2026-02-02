let employee: {
    readonly id: number,
    name?: string, // ? after => optional property(we should avoid it)
    retire: (date: Date) => void
} = { 
    id: 1, 
    retire: (date: Date) => {
        console.log(date);
    }
};

employee.name = 'Frede';