/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/y6HqTbtQy6B
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export function ManagementCustomers() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Customer Management</h1>
          <p className="text-muted-foreground">Approve or reject customer registration requests.</p>
        </div>
        <Button className="mt-4 md:mt-0">New Request</Button>
      </div>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Pending Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Locations</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 border">
                        <AvatarImage src="/placeholder-user.jpg" alt="Customer Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">John Doe</div>
                        <div className="text-sm text-muted-foreground">john@example.com</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Restaurant</Badge>
                      <Badge variant="outline">Cafe</Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">Premium</div>
                      <div className="text-sm text-muted-foreground">$99/month</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="grid gap-2">
                      <div>
                        <div className="font-medium">123 Main St, Anytown USA</div>
                        <div className="text-sm text-muted-foreground">
                          <Link href="#" className="underline" prefetch={false}>
                            View on Map
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium">456 Oak Rd, Anytown USA</div>
                        <div className="text-sm text-muted-foreground">
                          <Link href="#" className="underline" prefetch={false}>
                            View on Map
                          </Link>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">Jane Smith</div>
                      <div className="text-sm text-muted-foreground">
                        <Link href="#" prefetch={false}>
                          +1 (234) 567-890
                        </Link>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="credit-card">Credit Card</SelectItem>
                        <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                        <SelectItem value="paypal">PayPal</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Badge variant="pending">Pending</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <CheckIcon className="w-4 h-4" />
                        <span className="sr-only">Approve</span>
                      </Button>
                      <Button variant="outline" size="icon">
                        <XIcon className="w-4 h-4" />
                        <span className="sr-only">Reject</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 border">
                        <AvatarImage src="/placeholder-user.jpg" alt="Customer Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Jane Doe</div>
                        <div className="text-sm text-muted-foreground">jane@example.com</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Salon</Badge>
                      <Badge variant="outline">Spa</Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">Standard</div>
                      <div className="text-sm text-muted-foreground">$49/month</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="grid gap-2">
                      <div>
                        <div className="font-medium">456 Oak Rd, Anytown USA</div>
                        <div className="text-sm text-muted-foreground">
                          <Link href="#" className="underline" prefetch={false}>
                            View on Map
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium">789 Pine St, Anytown USA</div>
                        <div className="text-sm text-muted-foreground">
                          <Link href="#" className="underline" prefetch={false}>
                            View on Map
                          </Link>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-sm text-muted-foreground">
                        <Link href="#" prefetch={false}>
                          +0 (987) 654-321
                        </Link>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="credit-card">Credit Card</SelectItem>
                        <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                        <SelectItem value="paypal">PayPal</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Badge variant="pending">Pending</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <CheckIcon className="w-4 h-4" />
                        <span className="sr-only">Approve</span>
                      </Button>
                      <Button variant="outline" size="icon">
                        <XIcon className="w-4 h-4" />
                        <span className="sr-only">Reject</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Approved Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Locations</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 border">
                        <AvatarImage src="/placeholder-user.jpg" alt="Customer Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">John Doe</div>
                        <div className="text-sm text-muted-foreground">john@example.com</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Restaurant</Badge>
                      <Badge variant="outline">Cafe</Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">Premium</div>
                      <div className="text-sm text-muted-foreground">$99/month</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="grid gap-2">
                      <div>
                        <div className="font-medium">123 Main St, Anytown USA</div>
                        <div className="text-sm text-muted-foreground">
                          <Link href="#" className="underline" prefetch={false}>
                            View on Map
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium">456 Oak Rd, Anytown USA</div>
                        <div className="text-sm text-muted-foreground">
                          <Link href="#" className="underline" prefetch={false}>
                            View on Map
                          </Link>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">Jane Smith</div>
                      <div className="text-sm text-muted-foreground">
                        <Link href="#" prefetch={false}>
                          +1 (234) 567-890
                        </Link>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>Credit Card</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="success">Approved</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <FilePenIcon className="w-4 h-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="outline" size="icon">
                        <XIcon className="w-4 h-4" />
                        <span className="sr-only">Reject</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 border">
                        <AvatarImage src="/placeholder-user.jpg" alt="Customer Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Jane Doe</div>
                        <div className="text-sm text-muted-foreground">jane@example.com</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Salon</Badge>
                      <Badge variant="outline">Spa</Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">Standard</div>
                      <div className="text-sm text-muted-foreground">$49/month</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="grid gap-2">
                      <div>
                        <div className="font-medium">456 Oak Rd, Anytown USA</div>
                        <div className="text-sm text-muted-foreground">
                          <Link href="#" className="underline" prefetch={false}>
                            View on Map
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium">789 Pine St, Anytown USA</div>
                        <div className="text-sm text-muted-foreground">
                          <Link href="#" className="underline" prefetch={false}>
                            View on Map
                          </Link>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-sm text-muted-foreground">
                        <Link href="#" prefetch={false}>
                          +0 (987) 654-321
                        </Link>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>PayPal</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="success">Approved</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <FilePenIcon className="w-4 h-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="outline" size="icon">
                        <XIcon className="w-4 h-4" />
                        <span className="sr-only">Reject</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Rejected Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Locations</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="flex" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function FilePenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
