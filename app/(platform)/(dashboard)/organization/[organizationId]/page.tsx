import { auth, OrganizationSwitcher } from "@clerk/nextjs";


const OrganizationPage = ({

}) => {
    const {userId, orgId} = auth();
  return (
    <div>
        <OrganizationSwitcher
            hidePersonal
        />
    </div>
  )
}

export default OrganizationPage